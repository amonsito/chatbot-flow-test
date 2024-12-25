// const baseJson = {
//     nodes:
//     [
//         {
//             id: "1",
//             type: "START",
//             position: { x: 0, y: 267 },
//         },
//         {
//             id: "2",
//             type: "TEXT_MESSAGE",
//             channel: "whatsapp",
//             message: "If you like this project, give it a star on GitHub! ⭐️ and connect with me on LinkedIn 🚀. See top right corner or in bottom bar (mobile)",
//             deletable: true,
//             position: { x: 300, y: -140 },
//         },
//         {
//             id: "3",
//             type: "TEXT_MESSAGE",
//             channel: "telegram",
//             message: "This project is mobile responsive! 📱 Try it out on your mobile device! 🚀",
//             deletable: true,
//             position: { x: 300, y: 180 },
//         },
//         {
//             id: "4",
//             type: "TEXT_MESSAGE",
//             channel: "whatsapp",
//             message: "Now you can add new nodes by dropping edge on the canvas! Try it out! Drag the edge from this node to any empty space on the canvas. 🎉",
//             deletable: true,
//             position: { x: 300, y: 460 },
//         },
//         {
//             id: "5",
//             type: "END",
//             position: { x: 800, y: 267 },
//         },
//     ],
//     edges:
//     [
//         { id: "1", source: "1", target: "2", type: "deletable" },
//         { id: "2", source: "1", target: "3", type: "deletable" },
//         { id: "3", source: "1", target: "4", type: "deletable" },
//         { id: "4", source: "3", target: "5", type: "deletable" },
//         { id: "5", source: "2", target: "5", type: "deletable" },
//         { id: "6", source: "4", target: "5", type: "deletable" },
//     ],
// };
export async function getNodesAsync() {
    try {
        const response = await fetch("https://60330d01-1e74-4779-b17d-9dd798cdb866.mock.pstmn.io");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const baseJsons = await response.json();
        return baseJsons;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export async function saveNodesAsync(data) {
    const response = await fetch("https://c10ebfc5-3f02-40b3-87e2-f41930f931c3.mock.pstmn.io", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
};
