export const capitaliseWords = (string: string): string => {
  const words = string.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(' ');
};

export const sanitiseImageName = (name: string): string => {
  if (name.includes('egg')) return '/item/egg.png';

  return `/item/${name.replace(/\s+/g, '-').toLowerCase()}.png`;
};
