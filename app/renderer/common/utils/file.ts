import fs, { promises as fsPromiseAPIs } from 'fs'

const fileAction = {
  read: (path: string) => fsPromiseAPIs.readFile(path, { encoding: 'utf8' }),
  write: (path: string, content: string) => fsPromiseAPIs.writeFile(path, content, { encoding: 'utf8' }),
  rename: (oldPath: string, newPath: string) => fsPromiseAPIs.rename(oldPath, newPath),
  delete: (path: string) => fsPromiseAPIs.unlink(path),
  hasFile: (path: string) => fsPromiseAPIs.access(path, fs.constants.F_OK),
  canWrite: (path: string) => fsPromiseAPIs.access(path, fs.constants.W_OK),
  canRead: (path: string) => fsPromiseAPIs.access(path, fs.constants.R_OK),
} as const

export default fileAction