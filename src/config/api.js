import { db } from "../firebase";
import { onValue, ref, set } from "firebase/database";

export const Banner1 = async () => {
  let datas = [];
  await onValue(ref(db, "banner/"), (snapshot) => {
    const data = snapshot.val();
    if (data !== null) {
      datas.push(data);
    }
  });
  await onValue(ref(db, "banner2/"), (snapshot) => {
    const data = snapshot.val();
    if (data !== null) {
      datas.push(data);
    }
  });
  await onValue(ref(db, "banner3/"), (snapshot) => {
    const data = snapshot.val();
    if (data !== null) {
      datas.push(data);
    }
  });
  return datas;
};
