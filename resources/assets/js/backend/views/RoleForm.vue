<template>
  <div class="animated fadeIn">
    <form @submit.prevent="onSubmit">
      <b-row class="justify-content-center">
        <b-col xl="8">
          <b-card>
            <h4 slot="header">{{ isNew ? $t('labels.backend.roles.titles.create') : $t('labels.backend.roles.titles.edit') }}</h4>

            <b-form-group
              name="name"
              :label="$t('validation.attributes.name')"
              :horizontal="true"
              :label-cols="2"
              :feedback="feedback('name')"
            >
              <b-row>
                <b-col md="6">
                  <b-form-input
                    id="name"
                    name="name"
                    required
                    :placeholder="$t('validation.attributes.name')"
                    v-model="model.name"
                    :state="state('name')"
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-form-group>

            <b-form-group
              name="display_name"
              :label="$t('validation.attributes.display_name')"
              :horizontal="true"
              :label-cols="2"
              :feedback="feedback('display_name')"
            >
              <b-row>
                <b-col md="6">
                  <b-form-input
                    id="display_name"
                    name="display_name"
                    required
                    :placeholder="$t('validation.attributes.display_name')"
                    v-model="model.display_name"
                    :state="state('display_name')"
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-form-group>

            <b-form-group
              name="description"
              :label="$t('validation.attributes.description')"
              :horizontal="true"
              :label-cols="2"
              :feedback="feedback('description')"
            >
              <b-form-input
                id="description"
                name="description"
                :placeholder="$t('validation.attributes.description')"
                v-model="model.description"
                :state="state('description')"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              name="order"
              :label="$t('validation.attributes.order')"
              :horizontal="true"
              :label-cols="2"
            >
              <b-row>
                <b-col md="3">
                  <b-form-input
                    id="order"
                    name="order"
                    type="number"
                    required
                    v-model="model.order"
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-form-group>

            <div class="form-group row">
              <label class="col-sm-2 col-form-label">{{ $t('validation.attributes.permissions') }}</label>
              <b-col sm="10">
                <b-row>
                  <b-col md="6" xl="4" class="mb-3" v-for="category in permissions" :key="category.title">
                    <h4>{{ $t(category.title) }}</h4>
                    <b-form-checkbox-group stacked v-model="model.permissions" name="permissions[]">
                      <b-form-checkbox v-for="permission in category.permissions" :key="permission.name"
                                       v-b-tooltip.left :title="$t(permission.description)" :value="permission.name">
                        {{ $t(permission.display_name) }}
                      </b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-col>
                </b-row>
              </b-col>
            </div>

            <b-row slot="footer">
              <b-col md>
                <b-button to="/roles" variant="danger" size="sm">
                  {{ $t('buttons.back') }}
                </b-button>
              </b-col>
              <b-col md>
                <b-button type="submit" variant="success" size="sm" class="pull-right"
                          :disabled="pending"
                          v-if="isNew || this.$app.user.can('edit roles')">
                  {{ isNew ? $t('buttons.create') : $t('buttons.edit') }}
                </b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import form from '../mixins/form'

import _ from 'lodash'
// eslint-disable-next-line no-unused-vars
import { groupBy, forEach } from 'lodash/collection'

export default {
  name: 'RoleForm',
  mixins: [form],
  data () {
    return {
      permissions: [],
      modelName: 'role',
      listPath: '/roles',
      model: {
        name: null,
        display_name: null,
        description: null,
        order: 0,
        permissions: []
      }
    }
  },
  created () {
    axios
      .get(this.$app.route(`admin.roles.get_permissions`))
      .then((response) => {
        let categories = _.groupBy(_.forEach(response.data, (value, key) => {
          value['name'] = key
        }), 'category')

        this.permissions = Object.keys(categories).map((key) => {
          return {
            title: key,
            permissions: categories[key]
          }
        })
      })

    this.fetchData()
  },
  methods: {
    onModelChanged () {
      if (this.model.permissions) {
        this.model.permissions = this.model.permissions.map((item) => {
          return item.name
        })
      }
    }
  }
}
</script>
