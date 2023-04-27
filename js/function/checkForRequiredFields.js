const checkFields = (
    doctor,
    name,
    purpose,
    description,
    lastVisit,
    ageCardiologist,
    ageTherapist,
    pressure,
    massIndex,
    diseases
) => {
    let flag;
    if (doctor === '1') {
        name && description && purpose && lastVisit
            ? (flag = true)
            : (flag = false);
    } else if (doctor === '2') {
        name && description && purpose && ageTherapist
            ? (flag = true)
            : (flag = false);
    } else if (doctor === '3') {
        name &&
        description &&
        purpose &&
        ageCardiologist &&
        pressure &&
        massIndex &&
        diseases
            ? (flag = true)
            : (flag = false);
    }
    return flag;
};

export default checkFields;
