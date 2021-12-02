function compareArrays(arr1: any[], arr2: any[]): boolean {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) return arr1 === arr2;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (!compareArrays(arr1[i], arr2[i])) return false;
  }

  return true;
}

export default compareArrays;
