import addContractThumb from "../static/photos/home/services/add-contract.png";
import contractInfoThumb from "../static/photos/home/services/info.png";
import cardListThumb from "../static/photos/home/services/card.png";
import enquireStatusThumb from "../static/photos/home/services/status.png";
import historyThumb from "../static/photos/home/services/history.png";
import networkThumb from "../static/photos/home/services/network.png";

import aceThumb from "../static/photos/home/brands/ace-logo.png";
import baoVietThumb from "../static/photos/home/brands/baoviet-logo.png";
import greatEasternThumb from "../static/photos/home/brands/great-eastern-logo.png";
import pviThumb from "../static/photos/home/brands/pvi-logo.png";

export const ServiceList = [
  {
    key: "service01",
    name: "Thêm hợp đồng bảo hiểm",
    thumbnail: addContractThumb,
    href: "/them-hop-dong",
  },
  {
    key: "service02",
    name: "Thông tin các hợp đồng bảo hiểm",
    thumbnail: contractInfoThumb,
    href: "/contracts",
  },
  {
    key: "service03",
    name: "Danh sách thẻ bảo hiểm",
    thumbnail: cardListThumb,
    href: "#",
  },
  {
    key: "service04",
    name: "Truy vấn tình trạng hồ sơ",
    thumbnail: enquireStatusThumb,
    href: "#",
  },
  {
    key: "service05",
    name: "Xem lịch sử bồi thường",
    thumbnail: historyThumb,
    href: "#",
  },
  {
    key: "service06",
    name: "Tìm kiếm mạng lưới bảo lãnh bảo hiểm",
    thumbnail: networkThumb,
    href: "#",
  },
];

export const ContractList = [
  {
    id: "contract01",
    brand: "Bảo hiểm Chubb Life",
    owner: "Nguyễn Hoàng Hà Anh",
    date: "04/10/1995",
    thumbnail: aceThumb,
  },
  {
    id: "contract02",
    brand: "Bảo hiểm Chubb Life",
    owner: "Nguyễn Hoàng Hà Anh",
    date: "04/10/1995",
    thumbnail: baoVietThumb,
  },
  {
    key: "contract03",
    brand: "Bảo hiểm Chubb Life",
    owner: "Nguyễn Hoàng Hà Anh",
    date: "04/10/1995",
    thumbnail: greatEasternThumb,
  },
  {
    key: "contract04",
    brand: "Bảo hiểm Chubb Life",
    owner: "Nguyễn Hoàng Hà Anh",
    date: "04/10/1995",
    thumbnail: pviThumb,
  },
];
