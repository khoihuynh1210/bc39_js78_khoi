// main

const getQuery = (query = "") => document.querySelector(query);
const arrNumber = [];

getQuery("#btnThemso").onclick = () => {
  arrNumber.push(parseInt(getQuery("#Nhap").value));
  getQuery("#infoLogin1").innerHTML = arrNumber?.toString();
};

// 1 ( chỉ lấy số dương + với nhau)
getQuery("#btnTinhTong").onclick = () => {
  const total = arrNumber?.reduce((sum, x) => sum + x);
  getQuery("#infoLogin2").innerHTML = total;
};







//2
getQuery("#btnDem").onclick = () => {
  const total = arrNumber?.filter((e) => e > 0);
  getQuery("#infoLogin3").innerHTML = total.length;
};





//3
getQuery("#btnNhoNhat").onclick = () => {
  const total = arrNumber?.sort((a, b) => a - b);
  getQuery("#infoLogin4").innerHTML = total?.[0];
};




//4
getQuery("#btnTim2").onclick = () => {
  const total = arrNumber?.sort((a, b) => a - b)?.find((e) => e > 0);
  getQuery("#infoLogin5").innerHTML = total;
};





//5 
getQuery("#btnTimSoChan").onclick = () => {
  const total = arrNumber?.reverse()?.find((e) => e % 2 === 0);
  getQuery("#infoLogin6").innerHTML = total;
};




//6
getQuery("#btnDoiCho").onclick = () => {
  const index1 = parseInt(getQuery("#Vitri1").value);
  const index2 = parseInt(getQuery("#Vitri2").value);
  arrNumber[index1] = arrNumber?.splice(index2, 1, arrNumber[index1])[0];
  getQuery("#infoLogin7").innerHTML = arrNumber?.toString();
};





//7
getQuery("#btnSapXep").onclick = () => {
  getQuery("#infoLogin8").innerHTML = arrNumber?.sort()?.toString();
};





//8
const checkSNT = (number) => {
  if (number < 2) {
    return false;
  } else {
    for (let i = 2; i < number - 1; i++) {
      if (number % i == 0) {
        return false;
      }
    }
  }
  return true;
};

getQuery("#btnNguyenTo").onclick = () => {
  const snt = arrNumber?.find((e) => checkSNT(e));
  getQuery("#infoLogin9").innerHTML = snt;
};

//9
const arrNumber2 = [];
getQuery("#btnSoNguyen1").onclick = () => {
  arrNumber2.push(getQuery("#SoNguyen1").value);
  getQuery("#listArrNumber2").innerHTML = arrNumber2?.toString();
};
getQuery("#btnSoNguyen2").onclick = () => {
  const number = arrNumber2.filter((e) => Number.isInteger(parseFloat(e)));
  getQuery("#infoLogin10").innerHTML = number?.length;
};





//10
getQuery("#btnSoSanh").onclick = () => {
  const even = arrNumber?.filter((e) => e >= 0);
  console.log({a: arrNumber?.length - even > arrNumber?.length / 2});
  getQuery("#infoSoSanh").innerHTML =
    arrNumber?.length / 2 === even?.length
      ? "so luong bang nhau"
      : arrNumber?.length - even?.length > arrNumber?.length / 2
      ? "so duong < so am"
      : "so duong > so am";
};
