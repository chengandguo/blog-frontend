import {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import { sleep } from "@/utils";
import Input from "@/components/input";
import Button from "@/components/button";
import "./index.scss";

interface ErrorType {
  errorCode: {
    key: string;

    displayMessage: string;
  };
}

interface PropsType {
  receiver: string;

  receiverPrefix?: string;

  countDownTime?: number; // default is 60 seconds

  errorNotice?: string; // invalid verification code or other notice

  codeCount?: number;

  onSendVerificationCode: (receiver: string, isResend: boolean) => void; // isResend means resend code

  onVerifyCode: (receiver: string, code: string) => void;

  onSetError?: (error: ErrorType) => void;
}

const VerificationCode = (props: PropsType, ref) => {
  const {
    receiver,
    receiverPrefix,
    countDownTime = 60,
    errorNotice,
    codeCount = 6,
    onSetError,
  } = props;
  const [codeList, setCodeList] = useState(new Array(codeCount).fill(""));
  const [activeIndex, setActiveIndex] = useState(0);
  const [countDown, setCountDown] = useState(countDownTime);
  const [isCountDownComplete, setIsCountDownComplete] = useState(false);
  const { current: codeInputRefList } = useRef([]);
  // const { current: countDownRef } = useRef(new CountDown(countDownTime));

  useImperativeHandle(ref, () => ({
    clearVerificationCode() {
      setCodeList(new Array(codeCount).fill(""));
    },

    startCountDown(isDelay: boolean) {
      // startCountDown(isDelay);
    },

    getCountDownStatus() {
      return isCountDownComplete;
    },
  }));

  // const startCountDown = async (isDelay = false) => {
  //   setCodeList(new Array(codeCount).fill(""));
  //   setIsCountDownComplete(false);
  //   countDownRef.restart();
  //   countDownRef
  //     .onUpdate((value) => {
  //       setCountDown(value);
  //     })
  //     .onComplete(() => {
  //       setIsCountDownComplete(true);
  //     });
  //   if (isDelay) {
  //     await sleep(300);
  //   }
  //   codeInputRefList[0]?.focus();
  //   codeInputRefList[codeCount - 1]?.blur();
  // };

  const addPasteListener = () => {
    document.addEventListener("paste", (e) => {
      const item = e?.clipboardData?.items[0];
      const pattern = /\d+/g;
      if (item && item.kind === "string") {
        item.getAsString((str) => {
          if (str.length === codeCount && pattern.test(str)) {
            setCodeList(str.split(""));
          }
        });
      }
    });
  };

  useEffect(() => {
    setCodeList(new Array(codeCount).fill(""));
  }, [codeCount]);

  // useEffect(() => {
  //   return () => {
  //     countDownRef &&
  //       typeof countDownRef.clear === "function" &&
  //       countDownRef.clear();
  //   };
  // }, []);

  useEffect(() => {
    addPasteListener();
  }, []);

  const clearErrorNotice = () => {
    if (!errorNotice) return;
    typeof onSetError === "function" &&
      onSetError({
        errorCode: {
          key: "",
          displayMessage: "",
        },
      });
  };

  const handleKeyUp = async (e, index) => {
    const value = e.target.value;
    const BACKSPACE_KEY_CODE = 8;
    if (e.keyCode === BACKSPACE_KEY_CODE && index > 0) {
      clearErrorNotice();
      await sleep(0);
      codeInputRefList[codeCount - 1].blur();
      if ([null, ""].includes(value)) {
        codeInputRefList[index].blur();
        codeInputRefList[index - 1].focus();
        setActiveIndex(index - 1);
      } else {
        codeList[index] = "";
        codeInputRefList[index].focus();
        setActiveIndex(index);
        setCodeList([...codeList]);
      }
    }
  };

  const handleChange = async (value, index) => {
    codeList[index] = value;
    setCodeList([...codeList]);
    if (index < codeCount - 1 && value) {
      codeInputRefList[index].blur();
      codeInputRefList[index + 1].focus();
      setActiveIndex(index + 1);
    }

    if (
      codeList.join("").length === codeCount &&
      activeIndex === codeCount - 1
    ) {
      await sleep(0);
      handleVerifyCode();
    }

    clearErrorNotice();
  };

  const handleSendVerificationCode = () => {
    const { onSendVerificationCode, receiver } = props;
    typeof onSendVerificationCode === "function" &&
      onSendVerificationCode(receiver, true);
  };

  const handleVerifyCode = () => {
    if (codeList.join("").length < codeCount) {
      const error = {
        errorCode: {
          key: "CODE_LENGTH_ERROR",
          displayMessage: `请输入${codeCount}位验证码`,
        },
      };
      typeof onSetError === "function" && onSetError(error);
      return;
    }
    const { onVerifyCode } = props;
    typeof onVerifyCode === "function" &&
      onVerifyCode(receiver, codeList.join(""));
  };

  const renderCodeList = () => {
    const list = [];
    for (let i = 0; i < codeCount; ++i) {
      list.push(
        <Input
          inputClassName="code-item"
          inputTextClassName="code-item-input-text"
          ref={(elem) => {
            codeInputRefList[i] = elem;
          }}
          value={codeList[i]}
          index={i}
          hasClear={false}
          type="tel"
          isPureNumber
          error={!!errorNotice}
          onKeyUp={handleKeyUp}
          onChange={(value) => handleChange(value, i)}
        />
      );
    }
    return list;
  };

  return (
    <div className="code">
      <p className="code-notice">请输入发送至您邮箱的验证码</p>
      <div className="code-receiver">
        {receiverPrefix} {receiver}
      </div>
      <div className="code-list">{renderCodeList()}</div>
      {errorNotice && <div className="code-list-error">{errorNotice}</div>}
      {isCountDownComplete ? (
        <p
          className="code-count-down-resend"
          onClick={handleSendVerificationCode}
        >
          重发验证码
        </p>
      ) : (
        <p className="code-count-down">{countDown}</p>
      )}

      <Button
        type="primary"
        size="large"
        className="code-btn-verify"
        onClick={handleVerifyCode}
      >
        验证
      </Button>
    </div>
  );
};

export default forwardRef(VerificationCode);
