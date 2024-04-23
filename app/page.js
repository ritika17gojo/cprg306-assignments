import Link from 'next/link';

function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold text-center my-6">Welcome to the Shopping List</h1>
      <ul>
        <li><Link href="/week-2"><a>Week 2 Assignment</a></Link></li>
        <li><Link href="/week-3"><a>Week 3 Assignment</a></Link></li>
        <li><Link href="/week-4"><a>Week 4 Assignment</a></Link></li>
        <li><Link href="/week-5"><a>Week 5 Assignment</a></Link></li>
        <li><Link href="/week-6"><a>Week 6 Assignment</a></Link></li>
        <li><Link href="/week-7"><a>Week 7 Assignment</a></Link></li>
        <li><Link href="/week-8"><a>Week 8 Assignment</a></Link></li>
        <li><Link href="/week-10"><a>Week 19 Assignment</a></Link></li>
      </ul>
    </div>
  );
}

export default HomePage;