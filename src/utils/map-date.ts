export const mapDate = (date: string) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const split = date.split("/");

    if (parseInt(split[1]) > 0 && parseInt(split[1]) <= months.length) {
        split[1] = months[parseInt(split[1]) - 1];

        return "on " + split[0] + " " + split[1] + "," + split[2];
    } else {
        return false;
    }
}