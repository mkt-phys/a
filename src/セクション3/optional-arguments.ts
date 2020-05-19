export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / height ** 2;
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.9, 65, true);

// bmi(身長、体重、console.logで出力するかどうか)
// bmi(1.8,65,true);//出力する
// bmi(1.8,65,false);//出力しない
// bmi(1.8,65);//出力しない
