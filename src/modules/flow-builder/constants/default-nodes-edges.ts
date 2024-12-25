import type { MessageChannelType } from "~/modules/nodes/nodes/text-message-node/constants/channels";
import type { TextMessageNodeData } from "~/modules/nodes/nodes/text-message-node/text-message.node";

import { getNodesAsync } from "~/externalServices/nodes-external-services";
import { BuilderNode } from "~/modules/nodes/types";
import { createNodeWithData, createNodeWithDefaultData } from "~/modules/nodes/utils";

const baseJson = await getNodesAsync();

const nodes = baseJson.nodes.map((node) => {
    if (node.type === "TEXT_MESSAGE") {
        const channelContext = node.channel as MessageChannelType;
        return createNodeWithData<TextMessageNodeData>(BuilderNode.TEXT_MESSAGE, {
            id: node.id,
            channel: channelContext,
            message: node.message?.toString() ?? "",
            deletable: node.deletable,
        }, { position: node.position });
    }
    if (node.type === "START") {
        return createNodeWithDefaultData(BuilderNode.START, { id: node.id, position: node.position });
    }
    if (node.type === "END") {
        return createNodeWithDefaultData(BuilderNode.END, { id: node.id, position: node.position });
    }
    return null;
});

const edges = baseJson.edges;

export {
    nodes as defaultNodes,
    edges as defaultEdges,
};
