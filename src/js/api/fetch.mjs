export async function apiFetch(url, option, successHandler) {
  try {
    const response = await fetch(url, option);
    const biddingArray = await response.json();
    if (response.ok) {
      const array = successHandler(biddingArray);
      return array;
    } else {
      alert(biddingArray.errors[0].message);
    }
  } catch (error) {
    alert(error + " Please contact server admin");
  }
}
