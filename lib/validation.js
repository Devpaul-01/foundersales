function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function maskEmail(email) {
  const [name, domain] = email.split('@');
  const maskedName = name.substring(0, 2) + '*'.repeat(Math.max(name.length - 2, 1));
  const [domainName, tld] = domain.split('.');
  const maskedDomain = domainName.substring(0, 2) + '*'.repeat(Math.max(domainName.length - 2, 1));
  return `${maskedName}@${maskedDomain}.${tld}`;
}

function getTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  
  if (seconds < 60) return `${seconds} sec ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hr ago`;
  return `${Math.floor(seconds / 86400)} days ago`;
}

module.exports = { isValidEmail, maskEmail, getTimeAgo };