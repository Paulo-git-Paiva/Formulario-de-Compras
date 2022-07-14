<template>
  <div class="corDeTexto">
    <div>
      <v-app-bar color="purple darken-2 accent-4" dense dark>
        <v-img
          max-height="70%"
          max-width="10%"
          src="../../public/img/logo-bempaggo.png"
        ></v-img>
      </v-app-bar>
    </div>
    <v-row>
      <v-col>
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto"
            max-width="350"
          >
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="250" src="../../public/img/react.png"></v-img>

              <v-card-title class="corDeTexto">Adesivo React</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">4.5 (413)</div>
                </v-row>

                <div class="my-4 text-subtitle-1 font-weight-medium">
                  R$20,05
                </div>

                <div>Produto de ótima qualidade.</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title class="corDeTexto"
                >Selecione a Quantidade
                <h3>{{ n }}</h3>
                <input
                  type="number"
                  :ref="'volume-' + n"
                  :class="'volume-' + n"
                  class="volume"
              /></v-card-title>
              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                  Adicionar ao Carrinho
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-card>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto"
            max-width="350"
          >
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="250" src="../../public/img/vue.png"></v-img>

              <v-card-title class="corDeTexto">Adesivo Vue</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">4.5 (413)</div>
                </v-row>

                <div class="my-4 text-subtitle-1 font-weight-medium">
                  R$20,05
                </div>

                <div>Produto de ótima qualidade.</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title class="corDeTexto"
                >Selecione a Quantidade
                <h3>{{ n }}</h3>
                <input
                  type="number"
                  :ref="'volume-' + n"
                  :class="'volume-' + n"
                  class="volume"
              /></v-card-title>

              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                  Adicionar ao Carrinho
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-card>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto"
            max-width="350"
          >
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="250" src="../../public/img/Angular.png"></v-img>

              <v-card-title class="corDeTexto">Adesivo Angular</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">4.5 (413)</div>
                </v-row>

                <div class="my-4 text-subtitle-1 font-weight-medium">
                  R$20,05
                </div>

                <div>Produto de ótima qualidade.</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title class="corDeTexto"
                >Selecione a Quantidade
                <h3>{{ n }}</h3>
                <input
                  type="number"
                  :ref="'volume-' + n"
                  :class="'volume-' + n"
                  class="volume"
              /></v-card-title>

              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                  Adicionar ao Carrinho
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="1"></v-col>
      <v-col cols="6" sm="6">
        <v-textarea
          label="Observações:"
          auto-grow
          outlined
          rows="3"
          row-height="25"
          shaped
        ></v-textarea>
      </v-col>
      <v-row>
        <v-col class="baixo">
          <div class="text-center">
            <v-dialog v-model="dialog" width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  rounded
                  color="purple darken-2"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Continuar Compra
                  <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  Método de pagamento
                </v-card-title>
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Cartão
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-row class="justify-center">
                        <v-col align="center">
                          <v-img
                            max-height="100%"
                            max-width="60%"
                            src="../../public/img/logos-cartoes.png"
                          ></v-img>
                        </v-col>
                      </v-row>
                      <v-form>
                        <v-container fluid>
                          <v-row>
                            <v-col cols="12">
                              <v-text-field
                                :append-icon="'mdi-camera'"
                                :rules="[rules.required, rules.min]"
                                name="input-10-1"
                                label="Número do Cartão"
                                hint="No minimo 8 némeros"
                                outlined
                                clearable
                                dense
                              ></v-text-field>
                            </v-col>

                            <v-col cols="8">
                              <v-text-field
                                :rules="[rules.required]"
                                name="input-10-2"
                                label="Data de Validade (MM/AA)"
                                class="input-group--focused"
                                outlined
                                clearable
                                dense
                              ></v-text-field>
                            </v-col>

                            <v-col cols="4">
                              <v-text-field
                                :rules="[rules.required]"
                                name="input-10-2"
                                label="CVV"
                                class="input-group--focused"
                                outlined
                                clearable
                                dense
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                              <v-text-field
                                :rules="[rules.required]"
                                name="input-10-2"
                                label="Nome no Cartão"
                                error
                                outlined
                                clearable
                                dense
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-form>
                    </v-expansion-panel-content>
                  </v-expansion-panel> </v-expansion-panels
                ><v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-header> Pix </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div>
                        <v-img
                          max-height="80%"
                          max-width="25%"
                          src="../../public/img/qr-code.png"
                        ></v-img>
                      </div>
                      <div>
                        CODIGO : abhdgye51684815198415864161861641646848468
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel> </v-expansion-panels
                ><v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Boleto Bancário
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-img
                        max-height="100%"
                        max-width="80%"
                        src="../../public/img/BoletoB.png"
                      ></v-img>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    rounded
                    color="purple darken-2"
                    dark
                    text
                    @click="dialog = false"
                  >
                    Finalizar Compra
                    <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    loading: false,
    selection: 1,
    password: "Password",
    rules: {
      required: (value) => !!value || "Requirido.",
      min: (v) => v.length >= 8 || "No minimo 8 némeros",
    },
  }),
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
<style scoped>
.baixo {
  padding: 10%;
}
.corDeTexto {
  color: rgb(1, 70, 160);
}
.cart {
  background-color: rgb(1, 70, 160);
}
</style>
