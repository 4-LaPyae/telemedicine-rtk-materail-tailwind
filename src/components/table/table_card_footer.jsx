import { CardFooter } from "@material-tailwind/react";

export default function TableCardFooter({ children }) {
    return (
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            {children}
        </CardFooter>
    );
}
