function dateFormatting(date) {
    const [year, day, month] = date.split('-');
    return `${day}/${month}/${year}`;
}

export default dateFormatting;