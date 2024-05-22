function searchStory() {
  const query = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();
  if (query === "côn luân ma chủ") {
    window.location.href = "/webtruyen/conluanmachu/motaconluan.html";
  } else if (query === "kiếm đông sơn hạ") {
    window.location.href = "/webtruyen/Kiếmđongsonha/motakiemdongsonha.html";
  } else if (query === "tiên đan cho ngươi độc dược phần ta") {
    window.location.href = "/webtruyen/Tiên đan/motatiendan.html";
  } else if (query === "hoàng gia tiểu kiều phi") {
    window.location.href =
      "/webtruyen/hoanggiatieukieuphi.html/motahoangia.html";
  } else if (query === "sau khi bị cắm sừng tôi trùng sinh rồi") {
    window.location.href = "/webtruyen/cắm sừng/motacamsung.html";
  } else if (query === "phim giả tình thật") {
    window.location.href = "/webtruyen/phim giả tình thật/motaphimgia.html";
  } else {
    alert("Truyện không tồn tại!");
  }
}
