
// Frontend/src/utils/roleCheck.js

export const systemRoles = [
    'non-teaching',
    'student',
    'instructor',
    'head administration',
    'head academics',
    'principal',
    'head domestic',
    'accountant',
    'bursar',
    'health assistant',
    'hero',
    'hod',
    'class teacher',
    'form master',
    'house master',
    'senior house master'
];


// **
// Allow only those whith access
export function authorizeOnly(role, allowedRoles = systemRoles) {
    if (!role || allowedRoles.length === 0) return false;
    const normalizedRole = role.toLowerCase();
    return systemRoles.some(r => r.toLowerCase() === normalizedRole) && allowedRoles.some(r => r.toLowerCase() === normalizedRole);
}

export function isTeaching(role) {
    if (typeof role !== 'string') return false;

    const teachingRoles = [
        'instructor',
        'head administration',
        'head academics',
        'principal',
        'head domestic',
        'bursar',
        'health assistant',
        'hero',
        'hod',
        'class teacher',
        'form master',
        'house master',
        'senior house master'
    ];

    return teachingRoles.includes(role.toLowerCase());
}

export function isHOD(role) {
    if (!role) return false;
    const hodRoles = ['hod',];
    return hodRoles.includes(role.toLowerCase());
}

export function isFormMaster(role) {
    if (!role) return false;
    const hodRoles = ['form master',];
    return hodRoles.includes(role.toLowerCase());
}

export function isHouseMaster(role) {
    if (!role) return false;
    const hodRoles = ['house master',];
    return hodRoles.includes(role.toLowerCase());
}

