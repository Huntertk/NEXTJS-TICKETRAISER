import Ticket from "../../../(models)/Ticket";

import { NextResponse } from 'next/server'

export const DELETE  = async (req, res) => {
    try {
        await Ticket.findById(res.params.id)
        return NextResponse.json({messgae: "Ticket is Deleted"}, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({messgae: "Error", error}, {status: 500})
    }
}


export const GET  = async (req, res) => {
    try {
        const foundTicket =  await Ticket.findByIdAndDelete(res.params.id)
        return NextResponse.json({foundTicket}, {status: 200})
       
    } catch (error) {
        console.log(error);
        return NextResponse.json({messgae: "Error", error}, {status: 500})
    }
}