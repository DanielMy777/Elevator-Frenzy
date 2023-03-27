const floorToText = floorNumber => {
    const tens = floorNumber % 100;
    const singles = floorNumber % 10;
    if (floorNumber === 0) {
        return 'Ground Floor';
    }
    if (singles === 1 && tens !== 11) {
        return floorNumber + 'st';
    }
    if (singles === 2 && tens !== 12) {
        return floorNumber + 'nd';
    }
    if (singles === 3 && tens !== 13) {
        return floorNumber + 'rd';
    }
    return floorNumber + 'th';
};

export default floorToText;
