import { UserPayload } from './user-payload';

export type UserRole =
    | 'Student'
    | 'Instructor'
    | 'House Master'
    | 'Senior House Master'
    | 'HOD'
    | 'Head Administration'
    | 'Head Academics'
    | 'Principal'
    | 'Head Domestic'
    | 'Accountant'
    | 'Bursar'
    | 'Health Assistant'
    | 'Hero'
    | 'Marketer'
    | 'Editor'
    | 'Developer'
    | 'Front-desk'
    | 'HR'
    | 'Manager'
    | 'Supervisor'
    | 'Coordinator'
    | 'Electoral Officer'
    | 'Presiding Member'
    | 'Candidate'
    | 'Delegate';

export const ALL_ROLES: UserRole[] = [
    'Student',
    'Instructor',
    'House Master',
    'Senior House Master',
    'HOD',
    'Head Administration',
    'Head Academics',
    'Principal',
    'Head Domestic',
    'Accountant',
    'Bursar',
    'Health Assistant',
    'Hero',
    'Marketer',
    'Editor',
    'Developer',
    'Front-desk',
    'HR',
    'Manager',
    'Supervisor',
    'Coordinator',
    'Electoral Officer',
    'Presiding Member',
    'Candidate',
    'Delegate',
];

// 🔒 Check for exact role match
export function hasRole(user: UserPayload | undefined, role: UserRole): boolean {
    return user?.role === role;
}

// 🔑 Check if user's role is in a list
export function hasAnyRole(user: UserPayload | undefined, roles: UserRole[]): boolean {
    return roles.includes(user?.role as UserRole);
}

// 📦 Special-case helpers (optional)
export function isAcademicStaff(user: UserPayload | undefined): boolean {
    return hasAnyRole(user, ['HOD', 'Instructor', 'Head Academics']);
}

export function isAdminStaff(user: UserPayload | undefined): boolean {
    return hasAnyRole(user, ['Hero', 'HR', 'Head Administration', 'Principal']);
}

export function isStudent(user: UserPayload | undefined): boolean {
    return hasRole(user, 'Student');
}


export function isManagementStaff(user: UserPayload | undefined): boolean {
    return hasAnyRole(user, ['Developer', 'Front-desk', 'Supervisor']);
}