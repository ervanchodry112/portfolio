/** @format */

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface emailPostParameter {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
	const resend = new Resend(process.env.RESEND_API_KEY);
	const data = await req.json();
	console.log(data);

	try {
		const response = await resend.emails
			.send({
				from: 'ervanchodry@resend.dev',
				to: 'ervanchodry112@gmail.com',
				subject: `${data.name} - ${data.subject}`,
				html: `<table>
         <tr>
            <td>Email</td>
            <td>:</td>
            <td>${data.email}</td>
         </tr>
         <tr>
            <td>Message</td>
            <td>:</td>
            <td>${data.message}</td>
         </tr>
         </table>`,
			})

		return NextResponse.json({ response });
	} catch (error) {
		return NextResponse.json({ error });
	}
}
