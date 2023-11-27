export async function apiFetch(url, option, successHandler) {
  try {
    const response = await fetch(url, option);
    const biddingArray = await response.json();
    console.log(biddingArray);
    successHandler(biddingArray);
    return biddingArray;
  } catch (error) {
    alert(error + " Please contact server admin");
  }
}
