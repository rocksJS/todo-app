export function listIdMapper(item: any) {
  if (item) {
    const values = Object.values(item);
    const ids = Object.keys(item);

    return values.map((elem: any, index: number) => {
      elem.id = ids[index];

      return elem;
    });
  }

  return null;
}
