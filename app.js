const routerFenderConfig = { serverId: 1732, active: true };

const routerFenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_1732() {
    return routerFenderConfig.active ? "OK" : "ERR";
}

console.log("Module routerFender loaded successfully.");