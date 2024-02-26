import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
            <p className="text-lg text-gray-800">Name: Ritika Malik</p>
            <Link className="text-blue-500 hover:text-blue-600 mt-4 inline-block"
            href="https://github.com/ritika17gojo">

            </Link>
        </div>
    );
}