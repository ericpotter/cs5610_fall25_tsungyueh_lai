import Link from "next/link";
export default function CourseNavigation() {
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            <Link href="/Courses/123456/Home" id="wd-course-home-link" className="list-group-item active border-0">
                Home
            </Link>
            <Link href="/Courses/123456/Modules" id="wd-course-modules-link" className="list-group-item text-danger border-0">
                Modules
            </Link>
            <Link href="/Courses/123456/Piazza" id="wd-course-piazza-link" className="list-group-item text-danger border-0">
                Piazza
            </Link>
            <Link href="/Courses/123456/Zoom" id="wd-course-zoom-link" className="list-group-item text-danger border-0">
                Zoom
            </Link>
            <Link href="/Courses/123456/Assignments" id="wd-course-assignments-link" className="list-group-item text-danger border-0">
                Assignments
            </Link>
            <Link href="/Courses/123456/Quizzes" id="wd-course-quizzes-link" className="list-group-item text-danger border-0">
                Quizzes
            </Link>
            <Link href="/Courses/123456/People/Table" id="wd-course-people-link" className="list-group-item text-danger border-0" >
                People
            </Link>
        </div>
    );}
