import React from "react";
import { Layout, SprintCard } from "../src/components";

export default {
    title: 'Example/Layout',
    component: Layout,
    tags: ['autodocs'],
    layout: 'centered',
}

export const SprintBoardLayout = {
    args: {
        description: "Sprint Description",
        ticketId: "TC-1304",
        storypoint: "1",
        assignee: "",
        onClick: (data) => console.log("Card Click", data) ,
        title: 'In Progress'
    },
    decorators: [(Story) => <div style={{height: '300px', width: '400px'}}><Story/></div>],
    render: (args) => (
        <Layout title={args.title}>
            <SprintCard {...args}/>  
        </Layout>
    )
}