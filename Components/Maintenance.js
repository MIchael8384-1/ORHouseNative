import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";
import { ThemeProvider, Header } from "react-native-elements";
import ImageLogo from "./ImageLogo";

export default class Maintenance extends React.Component {
  state = {
    rooms: [
      {
        room: "Hallway",
        img: "https://icon-library.net/images/hallway-icon/hallway-icon-20.jpg"
      },
      {
        room: "Living Room",
        img: "https://static.thenounproject.com/png/81671-200.png"
      },
      {
        room: "Kitchen",
        img:
          "https://www.shareicon.net/data/256x256/2016/07/31/804832_gas_512x512.png"
      },
      {
        room: "Dining Room",
        img:
          "https://banner2.kisspng.com/20180329/fcw/kisspng-computer-icons-dinner-lunch-food-dining-room-dinner-5abcfb24e21f16.2858043015223345009262.jpg"
      },
      {
        room: "Master Bedroom",
        img:
          "data:image/jpeg;base64,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"
      },
      {
        room: "Ensuite",
        img:
          "https://icon-library.net/images/bathroom-icon/bathroom-icon-11.jpg"
      },
      {
        room: "Bedroom 2",
        img:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8TEBATEw8VEhQXFRUVFRUXDw8PEhUSFREWFhUXFRUYKCkgGBslHRUVITEhJSkrLi4uFx8zOD8tNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAAAQcIBAUGAgP/xABSEAABAgMEAwkKCQcMAwAAAAABAAIDBDEFESFhB3GxBggSQVFzlNLxEyIlNVSBkZOz8BQXMkRVdKGiwhUYUmJyhMEjJDRCU2OCg5KytNEWM0P/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Au9L+RDyKMh2IJJ4ghPFxqKYCvvVKZlBJN2ZQm5RTMpTE196IJvuql/GVGZ7EzKCQeM4ID6FFdSV1bUEg36kvv1KK6kyCCb+RCeIKMh2JTAIJJ4ghPnKimtKZlBJN2tL7qqKYmvvRMz2IJv4ygPGVGZSuJogkFAb9SiuraldW1BIN+pL+RRXAJkOxBJPEEJ4gopgEprQST6VN6+aZlSBdWqCVKhSg+SeIKKYCvvVSTyVUUzKBTMpTMpTMr8pqahwmOiRYjYbRVznNY0ec4BB+tMTX3omZ7FxbNtKXjs7pBjw4zacKHEZFaDyXt41ysygZlK6krqSuragV1bUrqSupMggZBMh2JkOxKYBApgEpmUpmUpmUCmZSmJr70SmJr70TMoGZ7EzKZlK4miBXE0SuraldW1K6tqBXVtSuASuATIdiBkOxKYBKYBfjOTcKCwviRGQ2ir3vaxo1uOAQftTWlMyuNZ1owIzOHBjQ47SbuFDiMiNv5L24Lk0xNfeiBTE196KQOMqMypA4yglSovUoPkm7WopmVJNyimJr74BApia+9FnjfEWtGfPwpYuIhQ4TXhl5uMR5de4jjNwAHJjyrQ+Z7FmnT+fDB5iF+JB12hq1osC15VrHEMjO7lEbf3rmlpuvHKDcRqzWp66lkrRb45s7nm7Cta11bUCuraldSE36l1No7qLOgngxZ6XhHkdMQmu8zb70HbZBMh2LxM7pYsKHh8NDj+pBjxB6Q277V001pzshnyIczEzEGG0fecEFn0wCUzKp2Np9lADwJCM4/rRYcO/XdeuvO+BdxWWAeUzpdshhBeVMylMTX3wCoY6f5jis6H55h5/gvyOn2cvwkIPrIpQX9mexMyqBGn2cvxkYB/zIoX6jT/McdnQzqjxB/BBfNcTRK6tqoxu+Bf8A1rLB1Thb+ArnwNP0uR/KWfFZy8GPDifaQ1BcldW1Mgqul9OtlOuDoMzDzMKE4ebguv8AsXcSul2wn3D4YYZP6cCO27z3Efag9zkOxKYBdLI7r7Mi3NhWhLPcaN+EQg//AEk3/Yu6a4XYY38dQc70CmtZz3wlqRn2iyXLz3KFCY4Nv73uj7y55HLdcNQzK0ZTMrMunseGYnMwf9qDjaE7XiwLXl2MceBG4UKI283OHAcWkjlDgCDr5VqPMrJuic+GrP50+zctZZlAzKkY4qK4mikY6tqD6vREQfJwxUZnsUnlKjMoGZWadP58MHmIX4lpaupZp0/nwweYhfiQeJ3NWuZObl5kMEQwnh4aSWg3A4Er2FsaZbajYMiw5ZvJChNvuzdE4R9FyrxEHZWnb87MX93m40a/ifGiPb/pJuC61EQEREBFIF+AXMh2TNO+TLRXaoMQ7Ag4SLtm7mLRIws+aI5fgkc/wX2Nydp/Rs30OY/6QdMi7n/xO0/o2b6HMdVfJ3L2kMfyfNdEj/8ASDqEXOiWNNt+VKxhrgRRtC4b2EEhwIPIQQUHyiIgLm2da81AN8CZiweP+TixIfp4JxXCRB7yyNL1twDjMtjt/RjQmv8AvN4L/tXQ7td08S0ZszL4bYbixjC1pJb3guvF+Iv5F0KIPW6J/HVn86fZuWsq4miybon8dWfzp9m5ayrq2oFdW1TffqUV1bVN/Ig+kUXKUHyRxlRXUpI9CiuragV1bVmnT+fDB5iF+JaWrqWad8Bd+WDzEL8SCtl2th7nJ6cddLSsSNjcS1h4AP6zz3rfOV1S09oIPgWDd/aRvaFBWtkaC7TiEGPGgy4NRwnR4g/wt737y9jZ2gez2cHu01HjO4w3ucBh81ziPSvU7udI8jZbmworYkSM5giNYxo+QXOaC57iABexwwvOFFVlq6eJ99/weVgwByvL5h/mPej7EFnyWiiwoVx+AiI7+8ixol/+Eng/Yu9k9yVmQsWWfLNPKJWDwvTdeszz2k224t/CtCI0HihiHAuGRYAftXTxd1FpOPfWhNOzM3HdtKDYkGWYwYMa3INAA9C/UcpWMxuktAUnpkfvUcfxXYye7+2YXybSmD+3GdHHoiXoNdDHHiSuras12ZptteHwRF7jMDj4cLubj54dwHoXv9zWm+TmHw4UxLxJZ73BoLSI8MuJAF5FzheT+iUFq11bUvvwC8Tu70mSVmxBBeyLFjFoeGMaAA03gFz3YD5JpeVV9rad7QfhLy0GXbxcLhzDx5zwW/dQaHJ4gvziQWkXFgdraCPPesoT2kq24oPCtGK0H+z4ED0GGAV1ETdPaLje60Jk65qOdpQa0nNzFnRP/ZIS0Q8rpWC4+kjBdHP6LbDifKkGNP8AdvjQfsYQPsWZWbpLQBvE9MjVNRx/FdlI6QLZhHvLSmD+3FMceiJeguW0tBVmOvMKPMQTxDhMisv1EXn0rx9r6B59gvgTUGOORwfLvJ4gB3zfS4Lg2TpvteGR3UQZkcfChdzeRkYdwHoVg7ldNclMxYUKPLxJeK9zWNuIjwi9zg1vfC5wvJH9W4cqCjbf3IWjJ/0mTiQm/p8Hhw/WNvb9q6Na50meJ7R+rv2LIyD1uiceGrP50+zctZV1bVk3ROPDVn86fZuWsq4CiBXAUU38QUZDsU5BBNylQpQfJF+pRXUug3Q7tbMk4jYczOMhPN3eXPiPANC4MBLBmbl3MlOQo0NsSDEbEhuF7XscHNIyIQftkFmnT+B+WDzEL8S0tkOxZp0/jwweYhfiQVstPaCD4Fg8vdI3tCs3WfY83HBMCVjRg3BxhwYkUNJoDwQblpjQrJxYNkQWRYT4T+6Re8ex0N9xiG7vXYoKu3xg8KS/1OH/AMiYVVq1N8YD+VZf6nD/AORMKq0BERAREQFz7AH87leehe0auAufYH9Lleehe0ag99vhfG7fq0L/AHxFWSs3fCjwu36tC/3xFWSAiIgIiIC7fch4xkPrUv7di6hdvuQ8YyH1qX9uxBqLSZjY9o8nwd+xZGWvtIkGJEsqfZDY57nQHhrWtL3OddRrRiVlWPubtBjHPfIzLGNF7nOlY7WtAqXOIuAQdzonHhqz+dPs3LWWQ7Fk3RP46s/nT7Ny1lkEDIKRhhxr4ixGsaXOcGgAuc4kNAAF5LiaALz1k7vLJmI5l4M9DiRr7g3v2h55GPcA1/8AhJQemRQpQYntS0IkxHix4juE+I9z3G8nFxv9AoNSuze2T8V0OfgF17GOhRGj9F0QPD7tfAb6FRIV2b2k9/af7MvtjILzpgFQmk/ctMWhuibLwR/8IRiRCCWw4YLr3u/gOM3BX3TMr8YcrDY98QMHdInBD3Xd84MBDQTyC83DM8qDgbmNz8vISsOWgNua2pOL4jz8p7zxk+gYAYALtaYmvvRKYmvvRMygpnTNuDtOfn4UaWgB8NssyGXGNBh9+I0ZxFziDRzcaYrwfxPW95I3pUt1lqLMpXE0QZd+J63vJG9Klusg0PW95I3pUt1lqKuraldW1Bl0aHrd8kb0qW6yDQ9bvkjelS3WWoq4BMh2IMu/E9bvkjelS3WXKsrRLbjJiA90q0BsWG5385ljc1rwSbuFyBaYpgEprQUpph0f2nPWiI0tAESH3CGzhGNBhnhBzyRc4g8YXiDoet3yRvSpbrLUVMylMTX3ogy6dD1u+SN6VLdZDoet3yRvSpbrLUWZTMoMu/E9b3kjelS3WT4nre8kb0qW6y1FXE0Suragy6ND1veSN6VLdZdhud0T21CnJSK+VaGMjwXvImZc3MbFa5xuDscAVpKuralcBRAvvwC+YrA4FhALSCHAgEFpFxBBrevrIdiZBBR79HzrO3Q2fGggmUixzwKnuLzDee5OPJXgnjAuqLzeFMBVQ9gwFwOIOIvxBvBU0zKCsd8HPRIVlMYx1wjTDGROVzAx77tXCY30LODHkEFpLSCCCCQQRQg8RWht8cPBst9ab7CKs7lBY3xy2t+k30Iq6RBAVpaDd1kjIOnjNR+5d0EEM7yI+/gGLwvkg3XcIelVaEQaqGliwR8+BPMTPVQaWLB8vF/MTPVWVUQapGliwqmfHqJnD7qDSxYVTPD1Ez1VlZEGqfjYsI1nh6iZ6qHSxYR+fC7mJnH7qysiDVJ0s2Efn4u5iZ6qk6WbCp8PA/yJnqrKqINVHSzYVBPD1Ez1U+NmwuKeHqJnqrKqINVfGxYI+fD1Ez1UGliwR8+BPMTPVWVUQaqGliwfLxfzEz1VA0sWFUz49RM4fdWVkQapGliwqmeHqJnqp8bFhGs8PUTPVWVkQapOliwj8+F3MTOP3UOlmwj8/F3MTPVWVkQapOlmwqfDx6iZ6qk6WbCoJ4eomeqsqog1V8bNhcU8PUTPVUfGxYIpPD1Ez1VlZEGqhpYsEfPgTzEz1UGliwfLwTzEz1VlVEFz6a92tmz0lAhy0yIsRswHub3OKy5ghRG33uAFXBUwiIJREQQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBKIiCAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIJREQQiBe40YbgBarpoGZMDuIhnCEIvC7pw8xddwPtQeHRXoN7+y/wAZu6KOun5v7L/GbuijroKLRXod7+z6Td0UddHb39n0m7oo66Ci0V6O3v7PpN3RR10O9/Zd4zd0UddBRaK9Pzf2XY2m7oo66De/su8ZuH7qOugotFejd7+z6TcP3UddG739n0m7oo66Ci0V6N3v7PpN3RR10G9/Zf4zd0UddBRaK9Pzf2X+M3dFHXQ739l/jN3RR10FFor0dvf2fSbuijro7e/s+k3dFHXQUWivQ739n0m7oo66fm/suxtN3RR10FFor0G9/Zd4zcP3UddG739n0m4fuo66Ci0V6N3v7PpN3RR10bvf2fSbuijroKLRXoN7+y/xm7oo66fm/sv8Zu6KOugotFY+kvRi2y5aFGE4Y5fFEPgmCId18N7r7+Ef0aZquEEoiIICuze0g8O0/wBmX2xlTlpSMSBGiwYgufDe5jh+s03HzYK697XJRAy0I11zHugw2u5XMERz7tQez0oLryHYlMAlMAlNaBTWlMylMylMTX3ogUxNfeiZlMymZQMylcTRK4miV1bUCuraldW1K6tqVwFECuAomQ7EyHYmQQMglMBVKYCqUzKBTMpTE196JTE1TMoGZTM9iZnsSuJogVxNErq2pXVtSuragV1bUrgKJXAUTIIGQTIJkEpgK+9UFUb44AWbK/Wm+wirO60hvhZF77KhvaLxCmGPiZMLHw79XCe0edZwa0kgAEkm4AC8kmiAisH4nrX/ALMelEF97otw1lzsQRJiTbEiC694dEhOIFA8sI4fnvXdSEjBgQ2QYEJsKG0XNY1oa1o1D05rkk8QUU1oFNaUzKUzKUxNfeiBTE198AmZTMpmUDMpXE0SuJoldW1Arq2pXVtSuralcBRArgKJkOxMh2JkEDIJTAVSmAqlMygUzKUxNUpia+9EzKBmUzPYmZ7EriaIFcTRK6tqV1bUrq2oFdW1K4CiVwFEyCBkEyCZBKYCvvVApgK+9UpmUpmUprQfEeCxzXNe0Pa4FrmuaHNc0i4tIOBGS85ZOj2yJaP8IhSTGxb72kmI8Mdysa4lrTmAvTUxKkDjKCVKIg+SfSopmV9FQBdjxoIpia+9EzKkDjKAcZQRmUriaKbr6pdfq2oIrq2pXVtUnHUh5EEVwFEyHYpPIEyCCMglMBVTSlUuuzKCKZlKYmvvRSBdjxoBxlBGZTM9ikDjKXX1QRXE0Surapuv1bUOOragiuralcBRSeTiQ8gQRkEyCnIJSiCKYCvvVKZlTddmUAu1oIprSmJUgcZQDjKCMz2KRjiUuvxKV1IJvUoiCEUoghCpRAKIiAoClEEBFKIChSiCEUoggoVKICIiAFAUoghFKIIRSiCFKIggqURBCIiD/9k="
      },
      {
        room: "Bathroom",
        img:
          "https://icon-library.net/images/bathroom-icon/bathroom-icon-11.jpg"
      },
      {
        room: "Storeroom",
        img: "https://static.thenounproject.com/png/636340-200.png"
      },
      {
        room: "WC",
        img: "https://static.thenounproject.com/png/26699-200.png"
      },
      {
        room: "other",
        img: "http://tadalafilforsale.net/data/media/98/62442583.png"
      }
    ]
  };

  render() {
    const { rooms } = this.state;
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<ImageLogo />}
          rightComponent={{
            icon: "home",
            color: "#4A306E",
            onPress: () => this.props.navigation.navigate("HomePage")
          }}
          containerStyle={{
            backgroundColor: "#fff",
            justifyContent: "space-around"
          }}
        />

        <View style={styles.scrollList}>
          <Text style={styles.header}>SELECT YOUR ROOM</Text>

          <FlatList
            ItemSeparatorComponent={() => <View style={styles.list} />}
            data={rooms}
            keyExtractor={item => item.room}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10
                }}
                onPress={() => this.handleListTap(item)}
              >
                <Image style={styles.image} source={{ uri: item.img }} />
                <Text style={{ padding: 10 }}>{item.room}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }

  handleListTap = item => {
    this.props.navigation.navigate("RoomIssue", { room: item.room });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollList: {
    flex: 1,
    // paddingTop: 10,

    backgroundColor: "#4A306E"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  // input: {
  //   height: 40,
  //   borderColor: "purple",
  //   width: 200,
  //   borderWidth: 1
  // },
  list: {
    height: 1,
    width: "100%",
    backgroundColor: "white"
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 20,
    backgroundColor: "#ED3192",
    color: "white",
    paddingTop: 20,
    paddingBottom: 20
  }
});
