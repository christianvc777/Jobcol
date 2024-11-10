# Proyecto de TI - Aplicacion JobCol

https://expo.dev/preview/update?message=JobCol%209.0&updateRuntimeVersion=1.0.0&createdAt=2024-11-10T00%3A56%3A19.704Z&slug=exp&projectId=729f4a6f-a1e5-4023-a088-f34ca0109e02&group=69edb3fa-009f-4595-b78c-5e8c56cbb470

Nota: Descargar Expo Go en Android 

### Hacer commit a Expo Dev

# Instalar expo-updates en tu proyecto
npm install expo-updates

# Instalar eas-cli globalmente
npm install -g eas-cli

# Iniciar sesión en Expo
eas login

# Configurar tu proyecto para EAS Update
eas update:configure

# Publicar la aplicación
eas update --branch main

### Hacer commit a GitHub

# Verificar la configuración del repositorio remoto
git remote -v

# Verificar la rama actual
git branch

# Cambiar a la rama principal (si es necesario)
git checkout main

# Agregar archivos y hacer commit de x version
git add .

git commit -m "Initial commit"

# Subir cambios al repositorio remoto usando el token de acceso personal (mio llave de acceso)
git push https://christianvc777:clavedeltoken@github.com/christianvc777/Jobcol.git main
