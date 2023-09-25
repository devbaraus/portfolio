export function kindBorderColor(kind: string) {
  return {
    work: 'border-l-primary',
    side_project: 'border-l-blue-500',
    college: 'border-l-green-500'
  }[kind];
}

export function kindBackgroundColor(kind: string) {
  return {
    work: 'bg-primary hover:bg-primary/80',
    side_project: 'bg-blue-500 hover:bg-blue-500/80',
    college: 'bg-green-500 hover:bg-green/80'
  }[kind];
}
