export const handleMessageBackgroundColor = (
  message: any,
  set: (value: string) => void,
) => {
  const data = message?.nativeEvent?.data;
  if (JSON.parse(data).backgroundColor !== undefined) {
    set(JSON.parse(data).backgroundColor);
  }
};

export const handleMessageTitle = (
  message: any,
  set: (value: string) => void,
) => {
  const data = message?.nativeEvent?.data;
  if (JSON.parse(data).title !== undefined) {
    set(JSON.parse(data).title);
  }
};

export const handleMessageShareUrl = (
  message: any,
  setShare: (value: string) => void,
  setUrl: (value: string) => void,
) => {
  const data = message?.nativeEvent?.data;
  if (JSON.parse(data).shareActive !== undefined) {
    setShare(JSON.parse(data).shareActive);
  }
  if (JSON.parse(data).shareUrl !== undefined) {
    setUrl(JSON.parse(data).shareUrl);
  }
};
