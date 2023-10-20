export interface HeaderItemType {
  label: string;
  value: string;
  fontSize: number;
  selected: boolean;
}

export const HEADER_LIST = [
  {
    label: "正文",
    value: "paragraph",
    fontSize: 15,
    selected: false,
  },
  {
    label: "标题1",
    value: "h1",
    fontSize: 28,
    selected: false,
  },
  {
    label: "标题2",
    value: "h2",
    fontSize: 24,
    selected: false,
  },
  {
    label: "标题3",
    value: "h3",
    fontSize: 20,
    selected: false,
  },
  {
    label: "标题4",
    value: "h4",
    fontSize: 16,
    selected: false,
  },
];

export const getLabel = (value: string) => {
  for (const item of HEADER_LIST) {
    if (item.value === value) {
      return item.label;
    }
  }
  return "正文";
};
