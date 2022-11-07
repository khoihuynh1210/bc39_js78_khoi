// main

const getQuery = (query = "") => document.querySelector(query);
const arrNumber = [];

getQuery("#btn1").onclick = () => {
  arrNumber.push(parseInt(getQuery("#Nhap").value));
  getQuery("#info1").innerHTML = arrNumber?.toString();
};

// 1 ( chỉ lấy số dương + với nhau)
getQuery("#btn2").onclick = () => {
  const total = arrNumber?.reduce((sum, x) => sum + x);
  getQuery("#info2").innerHTML = total;
};







//2
getQuery("#btn3").onclick = () => {
  const total = arrNumber?.filter((e) => e > 0);
  getQuery("#info3").innerHTML = total.length;
};





//3
getQuery("#btn4").onclick = () => {
  const total = arrNumber?.sort((a, b) => a - b);
  getQuery("#info4").innerHTML = total?.[0];
};




//4
getQuery("#btn5").onclick = () => {
  const total = arrNumber?.sort((a, b) => a - b)?.find((e) => e > 0);
  getQuery("#info5").innerHTML = total;
};





//5 
getQuery("#btn6").onclick = () => {
  const total = arrNumber?.reverse()?.find((e) => e % 2 === 0);
  getQuery("#info6").innerHTML = total;
};




//6
getQuery("#btn7").onclick = () => {
  const index1 = parseInt(getQuery("#Vitri1").value);
  const index2 = parseInt(getQuery("#Vitri2").value);
  arrNumber[index1] = arrNumber?.splice(index2, 1, arrNumber[index1])[0];
  getQuery("#info7").innerHTML = arrNumber?.toString();
};





//7
getQuery("#btn8").onclick = () => {
  getQuery("#info8").innerHTML = arrNumber?.sort()?.toString();
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

getQuery("#btn9").onclick = () => {
  const snt = arrNumber?.find((e) => checkSNT(e));
  getQuery("#info9").innerHTML = snt;
};

//9
const arrNumber2 = [];
getQuery("#btn10").onclick = () => {
  arrNumber2.push(getQuery("#SoNguyen1").value);
  getQuery("#listArrNumber2").innerHTML = arrNumber2?.toString();
};
getQuery("#btn11").onclick = () => {
  const number = arrNumber2.filter((e) => Number.isInteger(parseFloat(e)));
  getQuery("#info10").innerHTML = number?.length;
};





//10
getQuery("#btn12").onclick = () => {
  const even = arrNumber?.filter((e) => e >= 0);
  console.log({a: arrNumber?.length - even > arrNumber?.length / 2});
  getQuery("#info11").innerHTML =
    arrNumber?.length / 2 === even?.length
      ? "so luong bang nhau"
      : arrNumber?.length - even?.length > arrNumber?.length / 2
      ? "so duong < so am"
      : "so duong > so am";
};
