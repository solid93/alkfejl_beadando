# Dokumentáció
##Családi Todo
Aradi Roland - VDK4HH

###1.	Célkitűzés
A családomnak rengeteg dolga van egy nap leforgása alatt amiket el kell végezniük, viszont a mennyisége ezeknek a feladatoknak 
ellehetetleníti a céltudatos és hatékony megoldásukat. Ezen applikáció segítségével összegyűjteni, rendszerezni tudják ezeket a 
feladatokat, hogy később távolról bármikor elérhessék őket.

######Funkcionális követelmények:
* Regisztráció
* Bejelentkezés
* Csak bejelentkezett felhasználók által elérhető funkciók
  - új todo létrehozása
  - todo szerkesztése
  - todo törlése
  - todo teljesítetté tevése
  - todo megosztása más családtaggal

######Nem funkcionális követelmények:
*	**Könnyű áttekinthetőség:** Szín szerinti csoportosítás: fontos és kevésbé fontos feladatok, illetve teljesített feladatok megkülönböztetésére
*	**Használhatóság:** Ésszerű elrendezés, egyszerű használhatóság, "nagymama proof" design
*	**Megbízhatóság:** Jelszóval levédett, regisztráció alapú program, felhasználók nem láthatják más felhasználók todo-it, kivéve ha meg van osztva vele

__Használati esetek:__

![](docs/images/uml.png)

# 2. Tervezés

### Oldaltérkép

__publikus:__

- bejelentkezés
- regisztráció

__bejelentkezett:__

- teendők
  - új teendő
  - teendők listázása
    - teendő szerkesztése
    - teendő törlése

### Design-tervek végső megvalósítása
Belépés
![Belépés](docs/images/login.png)

Regisztráció
![Belépés](docs/images/reg.png)

Főoldal
![Főoldal](docs/images/main.png)

Főoldal-animáció
![Főoldal-animáció](docs/images/main2.png)

Új teendő
![Új-teendő](docs/images/ujteendo.png)

Elvégzett teendők
![Elvégzett-teendők](docs/images/elvegzett.png)

### Adatbázis kapcsolatok

![](docs/images/database.png)
