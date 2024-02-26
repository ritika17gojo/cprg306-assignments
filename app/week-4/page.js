import NewItem from './new-item';

export default function Week4Page() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50">
            <div className="max-w-md w-full space y-8">
                <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Week4Assignment</h1>
                <NewItem/>
            </div>
        </div>
    );
}