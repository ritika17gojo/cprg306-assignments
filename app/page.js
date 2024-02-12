import Link from 'next/link';

const HomePage=() => {
    return (
        <div>
            <h1>CPRG 306: Web Development 2- Assignments</h1>
            <p>
               <Link href="C:\cprg306\cprg306-assignments\app\week-2">
                <a> Week 2 Page</a>
               </Link>
               <Link href="C:\cprg306\cprg306-assignments\app\week-3">
                <a>Week 3 Page</a>
               </Link>
               <Link href="C:\cprg306\cprg306-assignments\app\week-4">
                <a>Week 4 Page</a>
               </Link>
            </p>
        </div>
    );
};
export default HomePage;

