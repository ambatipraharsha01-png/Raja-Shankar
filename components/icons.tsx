import React from 'react';

export const UniversityLogoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L1 9l4 1.5V17a1 1 0 001 1h12a1 1 0 001-1v-6.5L23 9l-11-7zm0 9l-4-2.5 4-2.5 4 2.5-4 2.5zM8 15v-3.5l4 2.5v3.5H8zm8 0h-4v-3.5l4-2.5V15z"></path>
    </svg>
);

export const GraduationCapIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
    </svg>
);

export const OfficeBuildingIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M8.25 21V3m8.25 18V3m-8.25 18h8.25M3.75 9h16.5m-16.5 6h16.5" />
    </svg>
);

export const HeartIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
);

export const UsersIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
      <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.41-1.412A6.998 6.998 0 0 0 10 11.5a6.998 6.998 0 0 0-6.535 2.993Z" />
    </svg>
);

export const ShieldCheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
);

export const ArrowRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

// New Dashboard Icons
export const HomeIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

export const PrintIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6 18.25M3.75 12h16.5M12 3.75L12 3m0 18l0 .75M3.75 12a9 9 0 0 0 16.5 0M3 8.25l1.5 1.5M3 15.75l1.5-1.5M21 8.25l-1.5 1.5M21 15.75l-1.5-1.5" />
    </svg>
);

export const StarIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
);
export const ChevronDownIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);
export const MenuIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);
export const UserCircleIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);
export const LightningBoltIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M11.983 1.904a.75.75 0 0 0-1.292-.904l-6.25 10.5a.75.75 0 0 0 .644 1.25h4.113l-2.29 4.122a.75.75 0 0 0 1.292.904l6.25-10.5a.75.75 0 0 0-.644-1.25h-4.113l2.29-4.122Z" />
  </svg>
);
export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

// Sidebar Icons (Solid Style)
export const PhoneIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full"><path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5h-1.5A11.5 11.5 0 0 1 3.5 6.5v-1.5Z" clipRule="evenodd" /></svg>;
export const BriefcaseIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full"><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.57.174 1.093.443 1.562.812a.75.75 0 0 1 .188 1.05l-3.213 4.66a.75.75 0 0 1-1.05.188 13.19 13.19 0 0 0-1.975-.812V3.75ZM8.75 2.5a1.25 1.25 0 0 0-1.25 1.25v.443c.57.174 1.093.443 1.562.812a.75.75 0 0 1 .188 1.05l-3.213 4.66a.75.75 0 0 1-1.05.188 13.19 13.19 0 0 0-1.975-.812V3.75A2.75 2.75 0 0 1 5.75 1h-1.5a.75.75 0 0 1 0-1.5h1.5A2.75 2.75 0 0 1 8.75 1H11.25a2.75 2.75 0 0 1 2.75 2.75v7.51a.75.75 0 0 1-1.5 0V8.834a13.23 13.23 0 0 0-4.017 1.78L5.27 15.28a.75.75 0 0 1-1.05-.188l-3.214-4.66a.75.75 0 0 1 .188-1.05A13.18 13.18 0 0 0 3 8.193V3.75A2.75 2.75 0 0 1 5.75 1h2.5A2.75 2.75 0 0 1 11.25 1h2.5A2.75 2.75 0 0 1 14 3.75v.443a13.182 13.182 0 0 0 1.562-.812.75.75 0 0 1 1.05-.188l3.213 4.66a.75.75 0 0 1-.188 1.05l-3.213 4.66a.75.75 0 0 1-1.05.188 13.19 13.19 0 0 0-1.975-.812V16.25a2.75 2.75 0 0 1-2.75 2.75h-2.5A2.75 2.75 0 0 1 6 16.25v-7.51a.75.75 0 0 1 1.5 0V15.166a13.23 13.23 0 0 0 4.017-1.78l3.213-4.667a.75.75 0 0 1 1.05.188l3.214 4.66a.75.75 0 0 1-.188 1.05 13.18 13.18 0 0 0-1.562.812v4.057A2.75 2.75 0 0 1 14.25 19h-2.5a.75.75 0 0 1 0-1.5h2.5a1.25 1.25 0 0 0 1.25-1.25v-4.057a13.182 13.182 0 0 0-1.562.812.75.75 0 0 1-1.05.188l-3.213-4.66a.75.75 0 0 1 .188-1.05A13.18 13.18 0 0 0 11 8.193V3.75Z" clipRule="evenodd" /></svg>;
export const InformationCircleIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full"><path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" /></svg>;
export const BookOpenIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" /></svg>;
export const AcademicCapIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full"><path d="M7.75 2.75a.75.75 0 0 0-1.5 0v1.258a32.987 32.987 0 0 0-3.599.278.75.75 0 1 0 .202 1.487c.208-.028.415-.054.622-.078v8.065a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75V8.21a25.53 25.53 0 0 1 3.21.943.75.75 0 0 0 .839-.265l.525-.75a.75.75 0 0 0-.265-.839a24.016 24.016 0 0 0-3.21-.943V4.258c1.44.224 2.755.59 3.926 1.042a.75.75 0 0 0 .63-.728V3.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v.01Z" /><path d="M3 10a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10Z" /></svg>;
export const LibraryIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full"><path d="M10 3.75a.75.75 0 0 1 .75.75v3.44l1.93-1.114a.75.75 0 1 1 .75 1.299l-2.5 1.443a.75.75 0 0 1-.75 0l-2.5-1.443a.75.75 0 1 1 .75-1.299l1.93 1.114V4.5a.75.75 0 0 1 .75-.75Z" /><path d="M2.5 7.5c0-1.518 1.232-2.75 2.75-2.75h10A2.75 2.75 0 0 1 18 7.5v6.25a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 13.75V7.5Zm3.25 1.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z" /></svg>;
export const SettingsIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full"><path fillRule="evenodd" d="M11.49 3.17a.75.75 0 0 1 1.02.67l.39 2.43a.75.75 0 0 0 1.14.65l2.28-1.14a.75.75 0 0 1 .97.32l1.37 2.38a.75.75 0 0 1-.44 1.06l-2.03.9a.75.75 0 0 0 0 1.34l2.03.9a.75.75 0 0 1 .44 1.06l-1.37 2.38a.75.75 0 0 1-.97.32l-2.28-1.14a.75.75 0 0 0-1.14.65l-.39 2.43a.75.75 0 0 1-1.02.67l-2.63-1.13a.75.75 0 0 0-.8 0l-2.63 1.13a.75.75 0 0 1-1.02-.67l-.39-2.43a.75.75 0 0 0-1.14-.65L2.1 18.08a.75.75 0 0 1-.97-.32L.75 15.38a.75.75 0 0 1 .44-1.06l2.03-.9a.75.75 0 0 0 0-1.34l-2.03-.9a.75.75 0 0 1-.44-1.06l1.37-2.38a.75.75 0 0 1 .97-.32l2.28 1.14a.75.75 0 0 0 1.14-.65l.39-2.43a.75.75 0 0 1 1.02-.67l2.63 1.13a.75.75 0 0 0 .8 0l2.63-1.13ZM10 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" clipRule="evenodd" /></svg>;
export const LogoutIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full"><path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" /><path fillRule="evenodd" d="M12.25 2.5a.75.75 0 0 0-1.5 0v2.19l-1.72-1.59a.75.75 0 0 0-1.02 1.1l3.5 3.25a.75.75 0 0 0 1.02 0l3.5-3.25a.75.75 0 1 0-1.02-1.1L13.75 4.69V2.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M13.75 17.5a.75.75 0 0 0 1.5 0v-2.19l1.72 1.59a.75.75 0 0 0 1.02-1.1l-3.5-3.25a.75.75 0 0 0-1.02 0l-3.5 3.25a.75.75 0 1 0 1.02 1.1l1.72-1.59v2.19Z" clipRule="evenodd" /></svg>;
export const BuildingLibraryIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full"><path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h11A2.5 2.5 0 0 1 18 5.5v1.879a.75.75 0 0 1-1.5 0V5.5a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a.75.75 0 0 1 0 1.5H4.5a2.5 2.5 0 0 1-2.5-2.5v-8Z" /><path d="M5 6.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2Zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2Z" /><path d="M14 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" /></svg>;
export const DocumentTextIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5H4.25Z" clipRule="evenodd" /></svg>;

export const TrophyIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full"><path d="M15.5 2.5a3 3 0 0 0-1.74-2.734.75.75 0 0 0-.914.398l-1.91 3.82a1.5 1.5 0 0 1-1.436.916H5.5a1.5 1.5 0 0 1-1.436-.916L2.152.164a.75.75 0 0 0-.914-.398A3 3 0 0 0 0 2.5v.516a.75.75 0 0 0 .75.75h18.5a.75.75 0 0 0 .75-.75V2.5ZM2.505 5.501a.75.75 0 0 0 .745.749h13.5a.75.75 0 0 0 .745-.749l.005-.002a2.997 2.997 0 0 0-2.25-2.998H4.75a2.997 2.997 0 0 0-2.25 2.998l.005.002ZM10 10.25a.75.75 0 0 0-1.5 0v2.247a1.5 1.5 0 0 1-1.436-.916L5.152 7.764a.75.75 0 0 0-.914-.398A3.001 3.001 0 0 0 2 10v6.5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V10a3.001 3.001 0 0 0-2.238-2.634.75.75 0 0 0-.914.398l-1.912 3.82a1.5 1.5 0 0 1-1.436.916H11.5v-2.247Z" /></svg>;

export const PlusIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
    </svg>
);

// Assistant Icons
export const ChatBubbleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M16.6 2H3.4A1.4 1.4 0 0 0 2 3.4v9.2A1.4 1.4 0 0 0 3.4 14H14l4 4V3.4A1.4 1.4 0 0 0 16.6 2Zm0 10.6H3.4V3.4h13.2v9.2Z"/>
    </svg>
);

export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M1.675 17.5 19.167 10 1.675 2.5v5.833l12.5 1.667-12.5 1.667v5.833Z"/>
    </svg>
);