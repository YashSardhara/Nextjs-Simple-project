import { NextResponse } from "next/server";

export function GET(request) {
    const users = [
        {
            name: 'Yash Patel',
            phone: '123456789',
            course: 'java'
        },
        {
            name: 'Ashraf Patel',
            phone: '123456789',
            course: 'cpp'
        },
        {
            name: 'sid Patel',
            phone: '123456789',
            course: 'nextjs'
        },
    ];

    return NextResponse.json(users);
}

export function POST() { };

export function PUT() { };

export function DELETE(request) {

    console.log("Delete API Called!!");

    return NextResponse.json({
        message: "Deleted !!",
        status: true,
    },{
status:201,statusText:"The status text is here",
    });

};