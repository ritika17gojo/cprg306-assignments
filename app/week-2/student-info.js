import Link from 'next/link';
const StudentInfo= () {
    return (
        <div>
        <p>Name: Ritika Malik</p>
        <Link href="https://github.com/ritika17gojo" passHref>
        <a target="_blank">My GitHub Repository</a></Link>
        </div>
    );
}
export default StudentInfo;