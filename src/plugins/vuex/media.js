import axios from "./axios";

export default {
    actions: {
        deleteFile(context, fileId) {
              return new Promise((resolve, reject) => {
                  axios
                      .delete('/media_objects' + fileId)
                      .then((response) => {
                          console.log('file ochirildi')
                          console.log(response)
                          resolve()

                      })
                      .catch(() => {
                          console.log('file ochirishda xatolik')
                          reject()
                      })
              })

              },
        pushFile(context, data) {

            return new Promise((resolve, reject) => {
                axios
                    .post('/media_objects', data,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                    .then((response) => {
                        console.log('make new file')
                        console.log(response.data['@id'])
                        console.log(response.data)
                        context.commit('updateMedia', response.data)

                        resolve()

                    })
                    .catch(() => {
                        console.log('yangi file bazaga qoshilmadi')
                        reject()
                    })
                    .finally(() => {
                        console.log('oxirgi bolib finally() ishladi')
                    })
            })

        },

    },
    mutations: {
        updateMedia(state, media) {
            state.media.id = media['@id']
        }
    },
    state: {
        media: {
            id:''
        }
    },
    getters: {
        getMedia(state){
            return state.media.id
        }
    }
}
