export function imageURLTest(inputValue) {
  if (inputValue.length === 0 || inputValue.every((url) => url === "")) {
    return true;
  }
  const valueTest = inputValue.every((url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  });
  return valueTest;
}
