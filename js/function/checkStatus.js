const checkResStatus = status => {
    if (status.ok) {
        return status.text();
    } else {
        return;
    }
};

export default checkResStatus;
