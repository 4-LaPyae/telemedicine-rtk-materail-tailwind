import DMP from "../app/assets/images/DMP.png";
import DFP from "../app/assets/images/DFP.jpeg";
import ADMIN from "../app/assets/images/Admin.jpg";

export const checkImageLink = (e, gender = "MALE") => {
    if (e) {
        e.currentTarget.src = gender === "MALE" ? DMP : DFP;
    } else {
        return gender === "MALE" ? DMP : DFP;
    }
};

export const checkProfileImageLink = (e) => {
    return ADMIN;
};
