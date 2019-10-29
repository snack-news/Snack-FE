const fs = require('fs');

const wipeDependencies = () => {
  const file = fs.readFileSync('package.json');
  const pkg = JSON.parse(file);

  const updatedPkg = {
    ...pkg,
    ...updateVersionDependencies(pkg, 'devDependencies', '*'),
    ...updateVersionDependencies(pkg, 'dependencies', '*'),
  };

  fs.writeFileSync('package.json', JSON.stringify(updatedPkg));
};

const updateVersionDependencies = (pkg, key, version) => ({
  [key]: Object.keys(pkg[key]).reduce(
    (updatedDependencies, dependency) => ({
      ...updatedDependencies,
      [dependency]: version,
    }),
    {}
  ),
});

wipeDependencies();
