type Props = {
  paths: {
    label: string;
    href: string;
    disabled?: boolean;
  }[];
};

export function Breadcrumbs({ paths }: Props) {
  return (
    <div>
      {paths.map((path, index) => (
        <span key={path.href}>
          {path.disabled ? (
            <span className="p-1 lowercase">{path.label}</span>
          ) : (
            <a
              className="bg-foreground-300 text-center p-1 lowercase hover:bg-foreground-100 inline-block"
              href={path.href}
            >
              {path.label}
            </a>
          )}
          {index < paths.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
}
