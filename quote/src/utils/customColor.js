const customBackgroundColor = () => {
  const colorString = "0123456789abcdef";
  let colorCode = "";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * colorString.length);
    colorCode += colorString[randomNumber];
  }
  // console.log(`#${colorCode}`);
  return "#" + colorCode;
};
export default customBackgroundColor;
