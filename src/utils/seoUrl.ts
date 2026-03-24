export const generateUrl = (link: string) => {
  //   return customToLowerCase(link.trim().replaceAll(" ", "-") ?? "");
  return customToLowerCase(
    link
      .trim()
      .replace(/['' ']/g, "-")
      .replaceAll("'", "")
      .replaceAll(".", "")
      .replaceAll("’", "") ?? ""
  );
};

const customToLowerCase = (str: string) => {
  const letters: any = {
    ı: "i",
    i: "i",
    I: "i",
    İ: "i",
    Ğ: "g",
    ğ: "g",
    Ü: "u",
    ü: "u",
    Ş: "s",
    ş: "s",
    Ö: "o",
    ö: "o",
    Ç: "c",
    ç: "c",
  };
  return str
    .replace(/[İIıiĞğÜüŞşÖöÇç]/g, function (letter) {
      return letters[letter];
    })
    .toLowerCase();
};
