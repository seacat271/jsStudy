let styles = ["Jazz", "Blues",];
styles.push ("Rock'n'Roll");
styles[(styles.length-1)/2]= "Classic";
styles.shift ();
styles.unshift ("Rap", "Reggy");
for (let music of styles  )
alert (music)   