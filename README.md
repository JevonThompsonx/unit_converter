# Unit Converter Project
My first project using backend and frontend seperately. 

The unit converter has a react typescript frontend that asks the bun/hono backend to do the conversion and accepts then displays the results. I ended up switching to a purely frontend project since I mostly did it this way to test out the backend and frontend being seperate and I also wanted to make the project a PWA with offline functionality

## How to 
- `bun run install:all` 
    - to install all dependencies
- `bun run dev`
  - to start server
      - frontend: port 3000
      - backend: port 8080

### Development 
- Target /api/ for backend
- Target / for frontend
- Uses proxy to auto route to backend if link starts with "/api"
